---
layout: home
name: FAM
title: Forest Access Management (FAM)
order: 2
description: 
---

# Problem Statement
The Natural Resource Sector (NRS) has relied extensively on WebADE for digital authorization for decades. The existing applications that are candidates for modernization under the Forest Service Applications Modernization Project (FSA) are almost all tightly coupled with the WebADE system. There is a complex operational data set, managed by a front-end application called ADAM, that is used to define authorization permissions, groups, and assignments. The modern applications being created under the FSA project will not be compatible with WebADE and will not be able to use ADAM for authorization management.

It is possible to define groups, roles, and user assignments using Keycloak, but there are a number of challenges with this approach. 
1. The Keycloak UX for managing authorization information is not very business-friendly. The people who currently have the responsibility to manage access for applications (using ADAM) would have difficulty with the Keycloak admin console.
2. The Keycloak admin console does not have fine-grained security. Users that can log in for the purposes of authorization management can also make manual changes to anything in the Keycloak realm to which they have privileges. 
3. The authorizations data model in Keycloak does not support all the requirements.
4. Keycloak is not necessarily an appropriate location for operational business data. It makes reporting difficult and it tightly couples authorization business logic to a product that might not be best-of-breed in the future.

# Goals
The Forests Authorization Management product (FAM) will meet the needs of the sector to allow business users to define and assign groups and roles. FAM will integrate with an OIDC service so that authorization context will be securely and transparently included in the context of any authentication process.

For More Information:


+ github: [https://github.com/bcgov/nr-forests-access-management/wiki/](https://github.com/bcgov/nr-forests-access-management/wiki/)
