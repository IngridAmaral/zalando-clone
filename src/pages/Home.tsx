import React from 'react';
import Header from '../components/header/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import brandsAC from '../redux/actions/get-campaign-data';
import { getBrands } from '../redux/reducers/campaign';
import { RootState } from '../redux/store';
import { Action, Dispatch } from 'redux';
// import { ThunkAction } from 'redux-thunk';
import { TBrand } from '../components/campaign-wrapper/CampaignWrapper';
import CampaignWrapper from '../components/campaign-wrapper/CampaignWrapper';
// import { campaignData } from '../server/data/campaign-data';
import './Home.scss';

// interface StateProps {}

type DispatchProps = {
  fetchBrands: () => void;
};

type OwnProps = {
  brands: TBrand[];
};

type HomeProps = unknown & DispatchProps & OwnProps;

// type HomeProps = {
// };

class Home extends React.Component<HomeProps> {
  componentDidMount(): void {
    const { fetchBrands } = this.props;
    fetchBrands();
  }

  render(): JSX.Element {
    const { brands } = this.props;
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

// export default Home;

const mapStateToProps = (state: RootState) => ({
  brands: getBrands(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  bindActionCreators(
    {
      fetchbrands: brandsAC,
    },
    dispatch
  );

const connector = connect(mapStateToProps, mapDispatchToProps)(Home);
export default connector;
// type PropsFromRedux = ConnectedProps<HomeProps>;
