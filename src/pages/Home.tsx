import React from 'react';
import Header from '../components/header/Header';
import BrandCampaign from '../components/brand-campaign/BrandCampaign';
import Loading from '../components/loading/Loading';
import './Home.scss';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBrandsDispatcher } from '../redux/actions-dispatcher/campaignBrands';
import { getCampaignBrands } from '../redux/reducers/campaignBrands';
import { RootState } from '../redux/store';
import { Action, Dispatch } from 'redux';
import { TBrand } from '../redux/types/campaignBrands';

const mapStateToProps = (state: RootState) => ({
  campaignBrands: getCampaignBrands(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  bindActionCreators(
    {
      fetchCampaignBrands: fetchBrandsDispatcher,
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type HomeProps = PropsFromRedux;

class Home extends React.Component<HomeProps> {
  componentDidMount(): void {
    const { fetchCampaignBrands } = this.props;
    fetchCampaignBrands();
  }

  render(): JSX.Element {
    const { campaignBrands } = this.props;

    if (campaignBrands !== undefined && !campaignBrands.length) {
      return <Loading />;
    }

    return (
      <div>
        <Header />
        <div>
          {campaignBrands?.map((brand: TBrand) => (
            <BrandCampaign key={brand.brandName} brand={brand} />
          ))}
        </div>
      </div>
    );
  }
}

export default connector(Home);
