"use client";

import { useActionState } from "react";
import { deleteComment } from "@/actions/query/deleteFunctions";
import { FaTrash } from "react-icons/fa";

function CommentsDeleteBtn({commentId,productId}) {

deleteComment.bind(null,{commentId,productId});

const [error,action,isPending] = useActionState(deleteComment.bind(null,{commentId,productId}), null);

if(error && error.message){
    alert('something went wrong!');
}

  return <form action={action} className="ml-auto">
  <button disabled={isPending} className="font-inter font-lighter text-white bg-errorColor p-3 text-xl rounded-full">{isPending ? "Loading..." : <FaTrash/>}</button>
  </form>

}

export default CommentsDeleteBtn;
