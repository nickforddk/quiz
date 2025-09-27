export const Roles = {
  INSTRUCTOR: 'instructor',
  STUDENT: 'student',
  PUBLIC: 'public',
};

export const isInstructor = (role) => role === Roles.INSTRUCTOR;
export const isStudent = (role) => role === Roles.STUDENT;
export const isPublic = (role) => role === Roles.PUBLIC;