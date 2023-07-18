export const selectContacts = state => state.contacts.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectUser = state => state.auth.user;

export const selectIsLogged = state => state.auth.isLogged;

export const selectIsRefreshing = state => state.auth.isRefreshing;
