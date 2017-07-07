import {intersection, isEqual} from "lodash";

export function rolesMatched(allowedRoles, userRoles) {
  return intersection(allowedRoles, userRoles).length > 0;
}

export function rolesMatchedExact(allowedRoles, userRoles) {
  return isEqual(allowedRoles, userRoles);
}