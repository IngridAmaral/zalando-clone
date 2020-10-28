import React from 'react';
import Header from '../components/header/Header';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBrandsAC } from '../redux/action-creators/brands';
import { getBrands } from '../redux/reducers/brands';
import { RootState } from '../redux/store';
import { Action, Dispatch } from 'redux';
import { TBrand } from '../components/campaign-wrapper/CampaignWrapper';
import CampaignWrapper from '../components/campaign-wrapper/CampaignWrapper';
import Loading from '../components/loading/Loading';
import './Home.scss';

const mapStateToProps = (state: RootState) => ({
  brands: getBrands(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  bindActionCreators(
    {
      fetchBrands: fetchBrandsAC,
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type HomeProps = PropsFromRedux;

class Home extends React.Component<HomeProps> {
  componentDidMount(): void {
    const { fetchBrands } = this.props;
    fetchBrands();
  }

  render(): JSX.Element {
    const { brands } = this.props;
    console.log('brands', brands);

    if (!brands.length) {
      return <Loading />;
    }

    return (
      <div>
        <Header />
        <div>
          {brands.map((brand: TBrand) => (
            <CampaignWrapper key={brand.brandName} brand={brand} />
          ))}
        </div>
      </div>
    );
  }
}

export default connector(Home);
