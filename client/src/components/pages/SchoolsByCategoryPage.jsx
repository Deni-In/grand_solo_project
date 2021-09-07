import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { useParams, withRouter } from "react-router-dom";
import {
  loadSchoolsByCategory,
  selectAllSchools,
  selectSchoolsLoading,
} from "../../redux/features/schools";
import { Box, CircularProgress } from "@material-ui/core";
import Schools from "../Schools";

function SchoolsByCategoryPage(props) {
  const dispatch = useDispatch();

  const { categoryId } = useParams();

  const schools = useSelector(selectAllSchools);

  const loading = useSelector(selectSchoolsLoading);

  useEffect(() => {
    dispatch(loadSchoolsByCategory(categoryId));
  }, [dispatch, categoryId]);

  return (
    <>
      <Helmet>
        <title>Школы категории</title>
      </Helmet>
      {loading ? <Box style={{ textAlign: "center", marginTop: "10%" }}>
        <CircularProgress />
      </Box> : <Schools />}
    </>
  );
}

export default withRouter(SchoolsByCategoryPage);
