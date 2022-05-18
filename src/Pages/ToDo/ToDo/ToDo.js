import React from "react";
import { useForm } from "react-hook-form";

const ToDo = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h2 className="text-primary text-center">React Simple ToDo App</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-25 justify-content-center mx-auto">
        <input className="mb-2 form-control" {...register("title")} placeholder="Write task name" />
        <textarea className="mb-2 form-control" rows={6} cols={10} {...register("description")} placeholder="Enter description"></textarea>
        <input type="submit" className="btn btn-primary"/>
      </form>
    </div>
  );
};

export default ToDo;
