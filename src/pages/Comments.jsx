import { useState } from "react";
import { RiReplyFill, RiStarFill, RiThumbUpFill } from "@remixicon/react";

const reviews = [
    {
        id: 1,
        user: "John Doe",
        message: "Amazing quality and finish! Loved the custom engraving.",
        rating: 5,
        likes: 3,
        replies: [
            {
                id: 2,
                user: "Store Owner",
                message: "Thanks John! Glad you loved it.",
                likes: 2,
            },
        ],
    },
    {
        id: 3,
        user: "Priya Sharma",
        message: "Perfect gift for my brother. Fast delivery too!",
        rating: 4,
        likes: 1,
        replies: [],
    },
];

export default function ProductReviews() {
    const [comments, setComments] = useState(reviews);
    const [replyText, setReplyText] = useState("");
    const [newComment, setNewComment] = useState("");
    const [replyingTo, setReplyingTo] = useState(null);

    const handleLike = (id, isReply = false, parentId = null) => {
        const updated = comments.map((c) => {
            if (c.id === id && !isReply) return { ...c, likes: c.likes + 1 };
            if (c.id === parentId && isReply) {
                const updatedReplies = c.replies.map((r) =>
                    r.id === id ? { ...r, likes: r.likes + 1 } : r
                );
                return { ...c, replies: updatedReplies };
            }
            return c;
        });
        setComments(updated);
    };

    const handleReply = (id) => {
        const updated = comments.map((c) => {
            if (c.id === id && replyText.trim()) {
                return {
                    ...c,
                    replies: [
                        ...c.replies,
                        {
                            id: Math.random(),
                            user: "You",
                            message: replyText,
                            likes: 0,
                        },
                    ],
                };
            }
            return c;
        });
        setComments(updated);
        setReplyingTo(null);
        setReplyText("");
    };

    const addComment = () => {
        if (!newComment.trim()) return;
        const newC = {
            id: Math.random(),
            user: "You",
            message: newComment,
            rating: 5,
            likes: 0,
            replies: [],
        };
        setComments([newC, ...comments]);
        setNewComment("");
    };

    return (
        <div className="mt-16 max-w-4xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#161616]">Customer Reviews</h2>

            {/* Average Rating */}
            <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                    <RiStarFill key={i} className="text-yellow-400 mr-1" />
                ))}
                <span className="ml-2 text-sm text-gray-600">5.0 average (2 reviews)</span>
            </div>

            {/* Add new comment */}
            <div className="mb-6">
                <textarea
                    rows="3"
                    placeholder="Write a review..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5151]"
                />
                <button
                    onClick={addComment}
                    className="mt-2 px-6 py-2 bg-[#FF5151] text-white rounded-md hover:bg-[#e04343]"
                >
                    Submit
                </button>
            </div>

            {/* Comments */}
            <div className="space-y-6">
                {comments.map((comment) => (
                    <div key={comment.id} className="border-b pb-4">
                        <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-[#161616]">{comment.user}</h4>
                            <div className="flex items-center text-yellow-400">
                                {[...Array(comment.rating)].map((_, i) => (
                                    <RiStarFill key={i} />
                                ))}
                            </div>
                        </div>
                        <p className="mt-1 text-gray-700">{comment.message}</p>

                        <div className="flex gap-4 mt-2 text-sm text-gray-500 items-center">
                            <button
                                onClick={() => handleLike(comment.id)}
                                className="flex items-center gap-1 hover:text-[#FF5151]"
                            >
                                <RiThumbUpFill /> {comment.likes}
                            </button>
                            <button
                                onClick={() => setReplyingTo(comment.id)}
                                className="flex items-center gap-1 hover:text-[#FF5151]"
                            >
                                <RiReplyFill /> Reply
                            </button>
                        </div>

                        {/* Reply Input */}
                        {replyingTo === comment.id && (
                            <div className="mt-2">
                                <textarea
                                    rows="2"
                                    placeholder="Write a reply..."
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                    className="w-full p-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-[#FF5151]"
                                />
                                <button
                                    onClick={() => handleReply(comment.id)}
                                    className="mt-2 px-4 py-1 bg-[#FF5151] text-white rounded hover:bg-[#e04343]"
                                >
                                    Post Reply
                                </button>
                            </div>
                        )}

                        {/* Replies */}
                        <div className="mt-3 pl-4 border-l border-gray-300 space-y-2">
                            {comment.replies.map((reply) => (
                                <div key={reply.id}>
                                    <p className="font-semibold text-sm text-[#161616]">{reply.user}</p>
                                    <p className="text-sm text-gray-700">{reply.message}</p>
                                    <button
                                        onClick={() => handleLike(reply.id, true, comment.id)}
                                        className="flex items-center gap-1 mt-1 text-sm text-gray-500 hover:text-[#FF5151]"
                                    >
                                        <RiThumbUpFill /> {reply.likes}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}