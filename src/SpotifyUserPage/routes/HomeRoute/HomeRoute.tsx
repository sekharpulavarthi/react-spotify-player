import { useHomeEditorsPicksHook } from "../../hooks/useEditorsPicksHooks";
import { useHomeNewReleasesHook } from "../../hooks/useHomeNewReleasesHook";
import { useGenresMoodsHook } from "../../hooks/useGenresMoodsHook";
import { useEffect } from "react";
import { observer } from "mobx-react";
import { constraints } from "../../../Common/constants";
import Loading from "../../../Common/components/Loading";
import Failure from "../../../Common/components/Failure";
import EditorsPicksView from "../../components/HomeRouteEditorsPicksView";
import NewReleasesView from "../../components/NewReleasesView";
import GenresMoodsView from "../../components/GenresMoodsView";

export const HomeRoute = observer(
  (): JSX.Element => {
    const homeEditorsPicksHook = useHomeEditorsPicksHook();
    const homeNewReleasesHook = useHomeNewReleasesHook();
    const homeGenresMoodsHook = useGenresMoodsHook();

    const gethomeEditorsPicks = () => {
      const { fetchHomeRouteEditorsData } = homeEditorsPicksHook;
      const { fetchHomeRouteNewReleasesData } = homeNewReleasesHook;
      const { fetchHomeGenresMoodsData } = homeGenresMoodsHook;

      fetchHomeRouteEditorsData();
      fetchHomeRouteNewReleasesData();
      fetchHomeGenresMoodsData();
    };

    useEffect(() => {
      gethomeEditorsPicks();
    }, []);

    const renderLoader = () => <Loading />;

    const renderFailureView = () => <Failure />;

    const renderEditorsPicksSuccessView = () => {
      const { responseData } = homeEditorsPicksHook;
      return <EditorsPicksView editorsPicksData={responseData} />;
    };

    const renderHomeRouteEditorsPicksView = () => {
      const { constraint } = homeEditorsPicksHook;

      switch (constraint) {
        case constraints.loading:
          return renderLoader();
        case constraints.failure:
          return renderFailureView();
        case constraints.success:
          return renderEditorsPicksSuccessView();
        default:
          return null;
      }
    };

    const renderNewReleasesSuccessView = () => {
      const { responseData } = homeNewReleasesHook;
      return <NewReleasesView newReleasesData={responseData} />;
    };

    const renderHomeRouteNewReleasesView = () => {
      const { constraint } = homeNewReleasesHook;

      switch (constraint) {
        case constraints.loading:
          return renderLoader();
        case constraints.failure:
          return renderFailureView();
        case constraints.success:
          return renderNewReleasesSuccessView();
        default:
          return null;
      }
    };

    const renderGenresMoodsSuccessView = () => {
      const { responseData } = homeGenresMoodsHook;
      return <GenresMoodsView genresMoodsData={responseData} />;
    };

    const renderHomeRouteGenresMoodsView = () => {
      const { constraint } = homeGenresMoodsHook;

      switch (constraint) {
        case constraints.loading:
          return renderLoader();
        case constraints.failure:
          return renderFailureView();
        case constraints.success:
          return renderGenresMoodsSuccessView();
        default:
          return null;
      }
    };

    return (
      <div>
        {renderHomeRouteEditorsPicksView()}
        {renderHomeRouteGenresMoodsView()}
        {renderHomeRouteNewReleasesView()}
      </div>
    );
  }
);
