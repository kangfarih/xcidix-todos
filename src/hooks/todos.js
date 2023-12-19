import { useQuery } from 'react-query';
import { useEffect } from 'react';

import { axiosInstance, endPoints, queryClient } from '../api';


async function getTodos() {
    try {
        const response = await axiosInstance.get(endPoints.todos);

        return response?.data;
    } catch (error) {
        return [];
    }
}

export const useGetTodos = () => {
    const { data, isLoading } = useQuery({
        queryFn: () => getTodos(),
        queryKey: [endPoints.todos],
    });

    return { data, isLoading };
};


// async function getConversationMessages({ conversation, pageParam }) {
//     if (!conversation) {
//         return {
//             msgs: [],
//             current_page: 1,
//             last_page: 1
//         };
//     }

//     try {
//         const response = pageParam
//             ? await axiosInstance.get(endPoints.conversation.messages(conversation) + `?page=${pageParam}`)
//             : await axiosInstance.get(endPoints.conversation.messages(conversation));

//         return {
//             msgs: response.data?.data,
//             current_page: response.data?.current_page ?? 1,
//             last_page: response.data?.last_page ?? 1
//         };

//     } catch (error) {
//         return {
//             msgs: [],
//             current_page: 1,
//             last_page: 1
//         };
//     }
// }

// export const useGetConversationMessages = ({ conversation }) => {
//     const {
//         data,
//         isLoading,
//         fetchNextPage,
//         isFetchingNextPage,
//         hasNextPage,
//         isFetching,
//     } = useInfiniteQuery({
//         queryFn: ({ pageParam }) => getConversationMessages({ conversation, pageParam }),
//         queryKey: [endPoints.conversation.messages(conversation)],
//         getNextPageParam: msgs => msgs?.current_page < msgs?.last_page
//             ? msgs?.current_page + 1
//             : undefined
//     });

//     return {
//         data,
//         isLoading,
//         isFetching,
//         isFetchingNextPage,
//         fetchNextPage,
//         hasNextPage
//     };
// };




// async function sendMessage({ conversation, message }) {
//     const response = await axiosInstance.post(endPoints.conversation.sendMessage(conversation), message);

//     return response.data;
// }

// export const useSendMessage = () => {
//     const { mutate, } = useMutation(sendMessage);

//     return {
//         onSendMessage: mutate
//     };
// };



// async function deleteConversation({ conversation }) {
//     const response = await axiosInstance.delete(endPoints.conversation.delete(conversation));

//     return response.data;
// }

// export const useDeleteConversation = () => {
//     const { mutate, isLoading } = useMutation(deleteConversation);

//     return {
//         onDeleteConversation: mutate,
//         isLoading
//     };
// };
