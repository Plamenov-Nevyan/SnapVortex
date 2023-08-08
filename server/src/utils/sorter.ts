import { CommentInterface, ReplyInterface } from "../types/CommentAndReply";
import { PostInterface } from "../types/Post";

export const sorter = (data: any) => {
    let sortedData = data.sort((a: any, b: any) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
    return sortedData
}