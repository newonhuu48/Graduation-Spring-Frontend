import React from 'react';

import useClaims from 'hooks/useClaims'

/**
 * RoleGuard renders children only if userRoles contains any role in allowedRoles.
 *
 * Props:
 * - allowedRoles: array of allowed roles, e.g. ['ROLE_TEACHER']
 * - children: React nodes to conditionally render
 */
export function RoleGuard({ allowedRoles = [], children }) {
  const claims = useClaims();

  if (!claims) {
    console.log('No claims yet');
    return null;
  }

  const userRoles = claims.roles || [];

  console.log('User roles:', userRoles);
  console.log('Allowed roles:', allowedRoles);

  const hasAnyRole = allowedRoles.some(role => userRoles.includes(role));

  console.log('Has any allowed role:', hasAnyRole);

  if (!hasAnyRole) {
    return null;
  }

  return <>{children}</>;
}