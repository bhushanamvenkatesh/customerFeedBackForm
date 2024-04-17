import React from "react";
import { useFormik } from "formik";
function SearchFilter(data) {
  let formik = useFormik({
    initialValues: {
      mode: "",
      courses: [],
      startRange: "",
      endRange: "",
    },
    onSubmit: (values) => console.log(values),
  });
  return (
    <form onChange={formik.handleSubmit} className="filter-container">
      <div className="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Mode
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <input
                type="radio"
                value={"online"}
                name="mode"
                onChange={formik.onChange}
              />{" "}
              Online <br />
              <input
                type="radio"
                value={"offline"}
                name="mode"
                onChange={formik.onChange}
              />{" "}
              Offline <br />
              <input
                type="radio"
                value={"all"}
                name="mode"
                onChange={formik.onChange}
              />{" "}
              All <br />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Courses
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <input
                type="checkbox"
                name="courses"
                value="Angular"
                onChange={formik.onChange}
              />{" "}
              Angular <br />
              <input
                type="checkbox"
                name="courses"
                value="Angular"
                onChange={formik.onChange}
              />{" "}
              Angular <br />
              <input
                type="checkbox"
                name="courses"
                value="Reac JS"
                onChange={formik.onChange}
              />{" "}
              React JS <br />
              <input
                type="checkbox"
                name="courses"
                value="MEAN"
                onChange={formik.onChange}
              />{" "}
              MEAN <br />
              <input
                type="checkbox"
                name="courses"
                value="MERN"
                onChange={formik.onChange}
              />{" "}
              MERN <br />
              <input
                type="checkbox"
                name="courses"
                value="Full Stack JAVA"
                onChange={formik.onChange}
              />{" "}
              Full Stack JAVa <br />
              <input
                type="checkbox"
                name="courses"
                value="DevOps"
                onChange={formik.onChange}
              />{" "}
              DevOps <br />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Enquiry Range
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div>
                <p className="m-0">Start Date:</p>
                <input type="date" name="startRange" className="w-80" />
                <br />
              </div>
              <div>
                <p className="m-0">End Data: </p>
                <input type="date" name="endRage" className="w-80" />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchFilter;
