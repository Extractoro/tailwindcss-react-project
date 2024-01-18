import Banner from "../shared/Banner";
import student from "../assets/student.png";

const Student = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
      <Banner
        banner={student}
        heading="Each student an share their discount code for friends"
        subheading="A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”"
        btn1="I have a code"
        type="student"
      />
    </div>
  );
};

export default Student;
