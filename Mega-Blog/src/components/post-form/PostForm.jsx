import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
            if (file) appwriteService.deleteFile(post.featuredImage);

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) navigate(`/post/${dbPost.$id}`);
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);
            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) navigate(`/post/${dbPost.$id}`);
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-").replace(/\s/g, "-");
        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="w-full max-w-3xl mx-auto bg-gray-800 p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">{post ? "Update Post" : "Create a New Post"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Left Side */}
                <div className="md:col-span-2 space-y-3">
                    <Input
                        label="Title :"
                        placeholder="Enter post title"
                        className="w-full"
                        {...register("title", { required: true })}
                    />
                    <Input
                        label="Slug :"
                        placeholder="Auto-generated from title"
                        className="w-full"
                        {...register("slug", { required: true })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                    <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
                </div>

                {/* Right Side */}
                <div className="space-y-3">
                    <Input
                        label="Featured Image :"
                        type="file"
                        className="w-full border p-2 rounded-md"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                    {post && (
                        <div className="w-full rounded-lg overflow-hidden shadow-sm">
                            <img
                                src={appwriteService.getFilePreview(post.featuredImage)}
                                alt={post.title}
                                className="rounded-lg object-cover w-full h-24"
                            />
                        </div>
                    )}
                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        className="w-full"
                        {...register("status", { required: true })}
                    />
                    <Button type="submit" className={`w-full py-2 px-4 rounded-lg text-white font-semibold ${post ? "bg-pink-700 hover:bg-pink-800" : "bg-gray-600 hover:bg-gray-700"}`}>
                        {post ? "Update Post" : "Create Post"}
                    </Button>
                </div>
            </div>
        </form>
    );
}
