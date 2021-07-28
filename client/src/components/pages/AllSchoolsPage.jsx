import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadAllSchools,
  selectSchoolsLoading,
} from "../../redux/features/schools";
import { Helmet } from "react-helmet";
import { CircularProgress } from "@material-ui/core";
import Schools from "../Schools";

function AllSchoolsPage(props) {
  const dispatch = useDispatch();

  const loading = useSelector(selectSchoolsLoading);

  useEffect(() => {
    dispatch(loadAllSchools());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>Все школы</title>
      </Helmet>
      {loading ? <CircularProgress /> : <Schools />}
    </>
  );
}

export default AllSchoolsPage;
