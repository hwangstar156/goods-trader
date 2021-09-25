import WithSpinner from "../../component/with-spinner/withSpinner.component";
import UserProfilePage from "./userprofile.pages";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectWritingFetching } from "../../redux/writings/writings.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: selectWritingFetching,
});

const UserProfileContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(UserProfilePage);

export default UserProfileContainer;
