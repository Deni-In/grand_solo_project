import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { selectAllSchools } from "../../redux/features/schools";
import School from "../Schools/School";
import Schools from "../Schools";

function SchoolsByCategoryPage(props) {
  const { categoryId } = useParams();

  const allSchools = useSelector(selectAllSchools);

  const schools = allSchools.filter((school) => {
    return school.category === Number(categoryId);
  });
  return (
    <>
      <Helmet>
        <title>Школы категории</title>
      </Helmet>
      {schools.map((school) => {
        return (
          <Schools category={categoryId} />
        );
      })}
    </>
  );
}

export default SchoolsByCategoryPage;
