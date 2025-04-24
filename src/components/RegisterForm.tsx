import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Select } from "components/ui/components";
import { storeTypeOptions } from "utils/businessData";
import { BusinessFormData, businessSchema } from "schemas/businessSchema";
import { useRegisterBusinessAdminMutation } from "hooks/business";
import { useModalStore } from "stores/useModalStore";

const RegisterForm: React.FC = () => {
    const { openSuccessRegister, setOpenSuccessRegister } = useModalStore()
    const portalUrl = import.meta.env.VITE_PORTAL_URL;
    const [step, setStep] = useState(1);
    
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
        trigger,
    } = useForm<BusinessFormData>({
        resolver: zodResolver(businessSchema),
    });

    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
    const nextStep = async () => {
        const isStep1Valid = await trigger(["firstname", "lastname", "email", "password"]);
        if (isStep1Valid) {
            setStep(2);
        }
    };

    const { mutate: registerBusinessAdmin, isPending: isRegisterBusinessAdminLoading } = useRegisterBusinessAdminMutation({
        onSuccess: () => {
            reset()
            setOpenSuccessRegister(true)
        },
        onError: () => {}
    });

    const onSubmit = (data: BusinessFormData) => {
        registerBusinessAdmin(data);
    };

    const onError = (errors: any) => {
        console.log(errors)
    }

    return (
        <>
        <div className="card bg-white w-full max-w-md shadow-lg rounded-lg">
            <div className="card-body px-8 py-6">
                <div className="mb-6">
                    <ul className="steps w-full">
                    <li className={`step ${step >= 1 ? "step-primary" : ""}`}>Owner</li>
                    <li className={`step ${step === 2 ? "step-primary" : ""}`}>Store</li>
                    </ul>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit, onError)}>
                    {step === 1 && (
                    <>
                        <Input
                            type="text"
                            label="Owner's First Name"
                            placeholder="e.g., Juan"
                            error={errors?.firstname?.message}
                            {...register("firstname")}
                        />

                        <Input
                            type="text"
                            label="Owner's Last Name"
                            placeholder="e.g., Dela Cruz"
                            error={errors?.lastname?.message}
                            {...register("lastname")}
                        />

                        <Input
                            type="email"
                            label="Email Address"
                            placeholder="e.g., you@example.com"
                            error={errors?.email?.message}
                            {...register("email")}
                        />

                        <Input
                            type="password"
                            label="Password"
                            placeholder="Create a password"
                            error={errors?.password?.message}
                            {...register("password")}
                        />
                    </>
                    )}

                    {step === 2 && (
                    <>
                        <Input
                            type="text"
                            label="Store Name"
                            placeholder="e.g., Juan's Shop"
                            error={errors?.name?.message}
                            {...register("name")}
                        />

                        <Select
                            label="Store Type"
                            options={storeTypeOptions}
                            {...register('type')}
                        />
                    </>
                    )}

                    <div className="flex justify-between items-center pt-4">
                    {step > 1 ? (
                        <button
                            type="button"
                            onClick={prevStep}
                            className="btn btn-outline"
                        >
                        Back
                        </button>
                    ) : (
                        <div />
                    )}

                    {step < 2 ? (
                        <button type="button" onClick={nextStep} className="btn btn-primary" disabled={isRegisterBusinessAdminLoading}>
                        Next
                        </button>
                    ) : (
                        <button type="submit" className="btn btn-primary" disabled={isRegisterBusinessAdminLoading}>
                        {isRegisterBusinessAdminLoading ? 'Loading..' : 'Register'}
                        </button>
                    )}
                    </div>
                </form>
            </div>
        </div>

        {openSuccessRegister && (
            <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white rounded-xl shadow-xl p-6 w-11/12 max-w-md text-center space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">🎉 Registration Successful!</h2>
                    <p className="text-gray-600">You’re all set. Click below to proceed to your portal.</p>
                    <button
                        className="btn btn-primary w-full"
                        onClick={() => {
                            window.location.href = `${portalUrl}/login`;
                            setOpenSuccessRegister(false)  
                        }}
                    >
                        Go to Portal
                    </button>
                </div>
            </div>
        )}
        </>
    );
};

export default RegisterForm;
