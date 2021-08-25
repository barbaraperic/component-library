import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name_sharing: yup.array(),
  name: yup.string().when("name_sharing", {
    is: yup.array().min(1),
    then: yup.string().required("Must enter your name"),
  }),
});

const handleSubmit = (data) => {};

const Questionnaire = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div title="Feedback questions">
      <Formik
        initialValues={{
          name: "",
          question1: "",
          question2: "",
          question3: "",
          anonymous_sharing: [],
          name_sharing: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          console.log(">>", data);
          setShowModal(true);
          // handleSubmit(data);
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            <input
              placeholder="Name and surname (optional)"
              size="large"
              name="name"
            />
            <input
              name="question1"
              placeholder="Your answer"
              label="What did you learn from our interaction"
              size="large"
            />
            <input
              name="question2"
              placeholder="Your answer"
              label=" How efficiently was our time spent together? Was there anything I could have done to avoid wasting our time?"
              size="large"
            />
            <input
              name="question3"
              placeholder="Your answer"
              label=" What questions did I not ask but should have?"
              size="large"
            />
            <div title="Feedback sharing preferences">
              <Wrapper role="group" aria-labelledby="checkbox-group">
                <RadioInputRequired>
                  <label>
                    <Field
                      type="checkbox"
                      name="anonymous_sharing"
                      value="Share with investor"
                    />
                    I would like to share my feedback with investor
                  </label>
                  {console.log(errors)}
                </RadioInputRequired>
                <RadioInput>
                  <label>
                    <Field
                      type="checkbox"
                      name="name_sharing"
                      value="Share with investor including my name"
                    />
                    I would like to share my feedback including my name
                  </label>
                </RadioInput>
              </Wrapper>
            </div>
            <button
              type="submit"
              variant="primary"
              size="medium"
              // disabled={data.startDate === "" || data.endDate === ""}
            >
              Next
            </button>
          </Form>
        )}
      </Formik>
      <div
        // title="Your preferences"
        isOpen={showModal}
        handleDismiss={() => setShowModal(false)}
      >
        <button
          type="submit"
          variant="primary"
          size="medium"
          // disabled={data.startDate === "" || data.endDate === ""}
        >
          Send feedback
        </button>
      </div>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  input {
    margin-right: 10px;
  }
`;

const RadioInputRequired = styled(RadioInput)`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 2rem;
`;

const Image = styled.img``;

const StyledButtonInfo = styled.button`
  background: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

export default Questionnaire;
