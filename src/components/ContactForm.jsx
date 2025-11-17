import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      await emailjs.send("###", "####", data, "####");
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error.message);
      toast.error(
        `An error occurred while sending the message:${error.message}`,
      );
    }
  };

  return (
    <div className="mx-auto mt-16 max-w-4xl rounded-lg border border-gray-200 bg-transparent px-4 py-6 shadow-md backdrop-blur-sm lg:mt-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="font-quicksand space-y-4"
      >
        <div>
          <label className="text-alpha block text-sm">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="border-alpha mt-1 w-full border-b focus:outline-none"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-700">Phone</label>
          <input
            type="tel"
            {...register("phone", { required: "Phone is required" })}
            className="border-alpha mt-1 w-full border-b focus:outline-none"
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-700">Email</label>
          <input
            type="email"
            {...register("user_email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
            })}
            className="border-alpha w-full border-b focus:outline-none"
          />
          {errors.user_email && (
            <p className="text-sm text-red-500">{errors.user_email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-700">Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="border-alpha w-full border-b focus:outline-none"
            rows="6"
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-alpha w-full rounded-md py-3 text-white transition"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
