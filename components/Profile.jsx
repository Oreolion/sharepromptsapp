import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left mb-3">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left mt-3">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map((item) => {
          return (
            <PromptCard
              key={item._id}
              post={item}
              handleEdit={() => handleEdit && handleEdit(item)}
              handleDelete={() => handleDelete && handleDelete(item)}
            ></PromptCard>
          );
        })}
      </div>
    </section>
  );
};

export default Profile;
