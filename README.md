# MochaChat: Your Personal Guidance and Mentoring Platform

MochaChat is your go-to mobile app for connecting seekers with mentors, providing 1x1 guidance across various domains. Whether you're a job seeker, student, or anyone seeking mentorship, MochaChat has you covered.

## Problem

In today's fast-paced world, personalized guidance is a rarity. MochaChat addresses this by connecting seekers with mentors, fostering meaningful connections.

## Solution

MochaChat is a mentorship app that facilitates direct connections between seekers and mentors. It's a hub for knowledge-sharing and professional growth.

## Features

- **Smart Matching:** Connects seekers with relevant mentors.
- **Direct Messaging:** In-app chat for easy communication.
- **Resource Sharing:** Mentors can share insightful resources.
- **Scheduling:** Convenient session scheduling.
- **Feedback:** Rate and review mentoring experiences.

## Tech Stack

- **React Native with Expo**
- **React Query**
- **React Native Navigation**

## Getting Started

1. Clone the repository: [MochaChat Repo](https://github.com/codeandgyan/connectl)
2. Download "Expo Go" app on your mobile device.
3. Ensure your machine and device are on the same WiFi network.
4. Run these commands:
```
yarn install
```
```
yarn start
```
5. Scan the QR code in the terminal using Expo Go.
6. Start your mentorship journey with MochaChat!

## Setting up local DB
1. This project uses json-server library and db.json to mimic the backend & DB.
2. Run this command on a separate terminal:
```
npx json-server --host 0.0.0.0 --port 3000 --watch db.json
```
3. This will spin-up the json server and the following API endpoints will be hosted which are specified in `.env` file.
```
EXPO_PUBLIC_GET_LOCAL_USERS_URL="http://192.168.0.0:3000/users"
EXPO_PUBLIC_GET_LOCAL_POSTS_URL="http://192.168.0.0:3000/posts"
```
4. Note the IP Address of your LAN and replace the values with appropriate IP address and change the following env variable value to this:
```
EXPO_PUBLIC_DATA_SOURCE="local"
```
5. This will allow all the CRUD operations
6. Possible values of EXPO_PUBLIC_DATA_SOURCE
`
local | remote | fake-remote
local - will read/write data from db.json
remote - this is protected by a key & hence you won't be able to use it
fake-remote - this is the default state. Fake will get loaded
`
## A sneak-peek
![image](https://github.com/codeandgyan/connectl/assets/140544523/2d209e64-0121-4c45-bd83-eff0a63a43bc)

## Wanna connect with me?

You're welcome to connect with me if you  want to contribute or simply want to learn React and React Native. Shoot me an email to codeandgyan@gmail.com.
Check out the project on [GitHub](https://github.com/codeandgyan/connectl).

## What's next?

Download and connect today for growth and learning!

---

Unleash your potential with MochaChat's mentorship platform. Get started now!
