import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
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
      toast.error(`An error occurred while sending the message:${error.message}`);
    }    

  };

  return (
    <div className="max-w-4xl bg-transparent px-4 py-6 mt-16 lg:mt-0 mx-auto rounded-lg shadow-md backdrop-blur-sm border border-gray-200">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-quicksand">
        <div>
          <label className="block text-alpha text-sm">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="mt-1 w-full border-b border-alpha focus:outline-none"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm text-gray-700">Phone</label>
          <input
            type="tel"
            {...register("phone", { required: "Phone is required" })}
            className="mt-1 w-full border-b border-alpha focus:outline-none"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm text-gray-700">Email</label>
          <input
            type="email"
            {...register("user_email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
            })}
            className="w-full border-b border-alpha focus:outline-none"
          />
          {errors.user_email && <p className="text-red-500 text-sm">{errors.user_email.message}</p>}
        </div>

        <div>
          <label className="block text-sm text-gray-700">Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="w-full border-b border-alpha focus:outline-none"
            rows="6"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-alpha text-white py-3 rounded-md transition"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

    
    </div>
  );
};

export default ContactForm;
