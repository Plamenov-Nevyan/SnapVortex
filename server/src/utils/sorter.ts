import { CommentInterface, ReplyInterface } from "../types/CommentAndReply";
import { PostInterface } from "../types/Post";

export const sorter = (dataType: string, data: PostInterface[] | CommentInterface[] | ReplyInterface[]) => {
    let sortedData = data.sort((a: any, b: any) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
    return sortedData
}