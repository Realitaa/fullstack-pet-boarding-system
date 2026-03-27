export const transformUser = (user: any) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    username: user.username,
    role: user.role,
    pfp_id: user.pfp_id,
    joinedAt: user.createdAt,
  };
};

export const transformUserList = (users: any[]) => {
  return users.map((user) => transformUser(user));
};
