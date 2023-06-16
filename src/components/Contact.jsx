import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit({ email, name, message }, { resetForm }) {
      window.open(
        `mailto:${email}?subject=Message sent by ${name} through your portfolio.&body=${message}`,
        "_blank"
      );
      resetForm();
    },
  });

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Reach me out</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          onSubmit={formik.handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {formik.errors.name && (
              <span className="text-red-500">{formik.errors.name}</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {formik.errors.email && (
              <span className="text-red-500 my-2">{formik.errors.email}</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {formik.errors.message && (
              <span className="text-red-500 my-2">{formik.errors.email}</span>
            )}
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Send
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
