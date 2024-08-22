# authentication-and-authorisation-with-expressjs
# Understanding User Deletion and Access Control

## Why "Delete User Functionality After Authentication" Might Not Be Enough

Allowing users to delete accounts just because they’re logged in (authenticated) is risky. Authentication checks if someone is who they say they are, but it doesn’t check if they should be allowed to delete other users. This can create security issues.

## What’s the Difference Between Authentication and Authorization?

- Authentication: This is about verifying who someone is. It’s like checking their ID to confirm their identity.

- Authorization: This decides what they are allowed to do after their identity is confirmed. It’s like deciding if they have permission to enter certain areas or use certain features.

## Why Authorization Matters for Deleting Users

If we only check if someone is logged in, they might still do things they shouldn’t be able to, like deleting user accounts. Here’s why it’s important to also check their permissions (authorization):

1. Security Risks: If anyone who logs in can delete accounts, they might misuse this power, causing harm or disruption.

2. Data Protection: Without proper permissions, people who shouldn’t delete accounts might accidentally or intentionally remove important data.

3. Role-Based Access: Normally, only admins or specific roles should have the power to delete accounts. This helps to ensure that sensitive actions are only performed by those with the right permissions.


