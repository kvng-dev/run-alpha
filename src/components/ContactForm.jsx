import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const styles = {
  dark: {
    input:
      "font-quicksand w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-secondary/50 focus:bg-white/10 focus:ring-1 focus:ring-secondary/30 md:text-base",
    label: "font-quicksand mb-1.5 block text-xs font-medium tracking-wide text-white/60 uppercase",
    button:
      "font-quicksand group flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:brightness-110 disabled:opacity-60 sm:text-base",
  },
  light: {
    input:
      "font-quicksand w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-secondary focus:bg-white focus:ring-1 focus:ring-secondary/30 md:text-base",
    label: "font-quicksand mb-1.5 block text-xs font-medium tracking-wide text-gray-500 uppercase",
    button:
      "font-quicksand group flex w-full items-center justify-center gap-2 rounded-full bg-alpha px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:brightness-110 disabled:opacity-60 sm:text-base",
  },
};

// eslint-disable-next-line react/prop-types
const ContactForm = ({ variant = "dark" }) => {
  const s = styles[variant];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send("###", "####", data, "####");
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error.message);
      toast.error(
        `An error occurred while sending the message: ${error.message}`,
      );
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Name + Phone row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
          <label className={s.label}>Name</label>
          <input
            type="text"
            placeholder="Your full name"
            {...register("name", { required: "Name is required" })}
            className={s.input}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </motion.div>

        <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
          <label className={s.label}>Phone</label>
          <input
            type="tel"
            placeholder="+234 ..."
            {...register("phone", { required: "Phone is required" })}
            className={s.input}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
          )}
        </motion.div>
      </div>

      {/* Email */}
      <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
        <label className={s.label}>Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          {...register("user_email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          className={s.input}
        />
        {errors.user_email && (
          <p className="mt-1 text-xs text-red-400">
            {errors.user_email.message}
          </p>
        )}
      </motion.div>

      {/* Message */}
      <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
        <label className={s.label}>Message</label>
        <textarea
          placeholder="How can we help you?"
          rows="5"
          {...register("message", { required: "Message is required" })}
          className={`${s.input} resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">
            {errors.message.message}
          </p>
        )}
      </motion.div>

      {/* Submit */}
      <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
        <button type="submit" disabled={isSubmitting} className={s.button}>
          {isSubmitting ? "Sending..." : "Send Message"}
          {!isSubmitting && (
            <BsArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          )}
        </button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
