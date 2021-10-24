import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../component/with-spinner/withSpinner.component";
import UserProfilePage from "./userprofile.pages";
import { selectUserFetching } from "../../redux/user/user.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: selectUserFetching,
});

const UserProfileContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(UserProfilePage);

export default UserProfileContainer;
