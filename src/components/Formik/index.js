import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import { FormikInput, FormikTextArea, Button } from "../../components";
import { Section, Modal } from "../../containers";
import SharingPreferences from "./SharingPreferences";

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
    <StyledSection title="Feedback questions">
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
            <FormikInput
              placeholder="Name and surname (optional)"
              size="large"
              name="name"
            />
            <FormikTextArea
              name="question1"
              placeholder="Your answer"
              label="What did you learn from our interaction"
              size="large"
            />
            <FormikTextArea
              name="question2"
              placeholder="Your answer"
              label=" How efficiently was our time spent together? Was there anything I could have done to avoid wasting our time?"
              size="large"
            />
            <FormikTextArea
              name="question3"
              placeholder="Your answer"
              label=" What questions did I not ask but should have?"
              size="large"
            />
            <StyledSection title="Feedback sharing preferences">
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
            </StyledSection>
            <Button
              type="submit"
              variant="primary"
              size="medium"
              // disabled={data.startDate === "" || data.endDate === ""}
            >
              Next
            </Button>
          </Form>
        )}
      </Formik>
      <Modal
        // title="Your preferences"
        isOpen={showModal}
        handleDismiss={() => setShowModal(false)}
      >
        <SharingPreferences preference="partly anonymous" />
        <StyledButton
          type="submit"
          variant="primary"
          size="medium"
          // disabled={data.startDate === "" || data.endDate === ""}
        >
          Send feedback
        </StyledButton>
      </Modal>
    </StyledSection>
  );
};

const StyledSection = styled(Section)`
  text-align: left;
`;

const StyledButton = styled(Button)`
  margin: 0 auto;
  display: block;
`;

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
