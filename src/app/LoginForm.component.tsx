"use client";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Button } from "@/lib/components/inputs/Button.component";
import { TextField } from "@/lib/components/inputs/textfield/Textfield.component";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export const LoginForm = () => {
	const router = useRouter();

	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
		password: Yup.string().required("Password is required"),
	});

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isDirty, isSubmitting },
	} = useForm({ resolver: yupResolver(validationSchema) });

	const onSubmit = async (data: { email: string; password: string }) => {
		const res = await signIn("credentials", {
			redirect: false,
			email: data.email,
			password: data.password,
		});
		if (res?.error)
			setError("password", {
				type: "server",
				message: "Incorrect password, are you a spy?",
			});
		else router.push("/event-settings");
	};

	return (
		<form role="form" onSubmit={handleSubmit(onSubmit)}>
			<Grid
				container
				direction={"column"}
				justifyContent={"center"}
				alignItems={"center"}
				spacing={4}
			>
				<Grid item xs={4} width={0.8}>
					<TextField
						label="Email"
						type="email"
						fullWidth
						{...register("email")}
						error={errors.email?.message}
					/>
				</Grid>
				<Grid item xs={4} width={0.8}>
					<TextField
						label="Password"
						type="password"
						fullWidth
						{...register("password")}
						error={errors.password?.message}
					/>
				</Grid>

				<Grid item xs={2}>
					<Button
						variant="contained"
						size="large"
						disabled={!isDirty}
						type="submit"
						isLoading={isSubmitting}
					>
						Open sesami!
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};
