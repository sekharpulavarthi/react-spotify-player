import { useEffect } from "react";
import { observer } from "mobx-react";
import { constraints } from "../../../Common/constants";
import Loading from "../../../Common/components/Loading";
import Failure from "../../../Common/components/Failure";
import { useEditorsPicksPlayListHook } from "../../hooks/useEditorsPicksPlayListHook";
import { MatchParamsTypes } from "../../stores/types";
import { RouteComponentProps } from "react-router-dom";

export const EditorsPicksPlayListRoute = observer(
  (props: RouteComponentProps<MatchParamsTypes>): JSX.Element => {
    const editorsPicksPlayListHook = useEditorsPicksPlayListHook();

    const getEditorsPicksPlayListData = () => {
      const { fetchEditorsPicksPlayListData } = editorsPicksPlayListHook;
      const { match } = props;
      const { params } = match;
      const { id } = params;
      fetchEditorsPicksPlayListData(id);
    };

    useEffect(() => {
      getEditorsPicksPlayListData();
    }, []);

    const renderLoader = () => <Loading />;

    const renderFailureView = () => <Failure />;

    const renderEditorsPicksPlayListSuccessView = () => {
      const { responseData } = editorsPicksPlayListHook;
      return <h1> qwerty</h1>;
    };

    const renderEditorsPicksPlayListView = () => {
      const { constraint } = editorsPicksPlayListHook;

      switch (constraint) {
        case constraints.loading:
          return renderLoader();
        case constraints.failure:
          return renderFailureView();
        case constraints.success:
          return renderEditorsPicksPlayListSuccessView();
        default:
          return null;
      }
    };

    return <div>{renderEditorsPicksPlayListView()}</div>;
  }
);
