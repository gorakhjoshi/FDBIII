"use strict";

const url = "https://api.github.com/users/";
const usernameInput = "gorakhjoshi";

const fetchProfile = async () => {
  try {
    const res = await fetch(`${url}${usernameInput}`);
    const data = await res.json();
  } catch (error) {
    console.log("Error occured!");
  }
};
fetchProfile();

const fetchRepos = async () => {
  try {
    const res = await fetch(`${url}${usernameInput}/repos`);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchRepos();
