import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../component/with-spinner/withSpinner.component";
import { selectWritingFetching } from "../../redux/writings/writings.selector";
import IdolCollectionPage from "./idol-collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectWritingFetching,
});

const IdolCollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(IdolCollectionPage);

export default IdolCollectionContainer;
