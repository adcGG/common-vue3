import http from "@/request/axios";

export function getUserList(params: { id: number }) {
  return http({
    url: `/user/userList/${params.id}`,
    method: "get",
  });
}

