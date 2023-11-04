import React from "react";
import Select from "./Select"
import Input from "./Input"
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const Form = () => {
    const form = useForm({
        mode: "onChange",
        defaultValues: {}
    })
    const { handleSubmit, register } = form;
    const onSubmit = () => {
        toast('Coming Soon ')
    }
    return <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-10 ">
            <div className="flex w-full justify-around items-center">
                <Select label="Organization" name="org" register={register} options={["All", "name"]} />
                <Select label="Repository" name="repo" register={register} options={["All", "name"]} />
            </div>
            <div className="flex w-full justify-around">
                <Input label="Date" name="date" register={register} type="date" />
                <Input label="Primary Language" register={register} name="lang" />
            </div>
        </div>
        <div className="mt-6 flex w-full justify-end space-y-10 ">
            <div className="w-1/3"></div>
            <div className="w-1/3 space-x-10">
                <button type="reset" className="text-sm px-3 py-2 rounded border-2 font-semibold leading-6 text-gray-900" >
                    Clear Values
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Export
                </button>
            </div>
        </div>
    </form>
}