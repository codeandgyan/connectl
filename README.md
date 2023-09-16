# Seekerz: Your personalized 1x1 connections and guidance platform

Seekerz is a go-to mobile app that helps you form meaningful connections with likeminded people, mentors, code friends, learning buddies, travel partners, et al by providing a direct chat messaging capability. Whether you're a coder learning to code, a job seeker looking for guidance, a student seeking career guidance, or someone seeking mentorship, Seekerz has you covered.

## The Problem

- In today's social-media world, personalized connection is a rarity.
- It's hard to connect with a professional who can guide you learn what you're looking for.
- It's hard to find a mentor that can help you do better in your profession.
- It's hard to find a fellow coder with whom you can build and learn a software app.
- It's hard to find a buddy with whom you can learn a language.

## The Solution
- Seekerz addresses the problem by directly connecting seekers with likeminded people fostering meaningful connections and learning.

- Seekerz facilitates direct 1x1 connections between seekers and providers. It's a hub for knowledge-sharing and professional growth.

## Features

- **Smart Matching:** Connects seekers with likeminded people, mentors and guides.
- **Direct Messaging:** In-app chat for easy communication.
- **Resource Sharing:** Mentors can share insightful resources.
- **Scheduling:** Convenient session scheduling.

## Tech Stack

- **React Native with Expo**
- **React Query**
- **React Native Navigation**

## Getting Started

1. Clone the repository: [Seekerz Repo](https://github.com/codeandgyan/connectl)
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
6. Start your learning journey by 1x1 connections with Seekerz!

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
6. Possible values of EXPO_PUBLIC_DATA_SOURCE are `local | remote | fake-remote`
   - `local` - will read/write data from [db.json](https://github.com/codeandgyan/connectl/blob/main/db.json)
   - `remote` - this is protected by a key of a remote tool called [Jsonbin](https://jsonbin.io/app/bins) & hence you won't be able to use it
   - `fake-remote` - this is the default state. Fake will get loaded
## A sneak-peek
![image](https://github.com/codeandgyan/connectl/assets/140544523/2d209e64-0121-4c45-bd83-eff0a63a43bc)

## Wanna connect with me?

You're welcome to connect with me if you  want to contribute or simply want to learn React and React Native. Shoot me an email to codeandgyan@gmail.com.
Check out the project on [GitHub](https://github.com/codeandgyan/connectl).

## What's next?

Download and connect today for personal growth and learning!

---

Unleash your potential with Seekerz's 1x1 connection platform. Get started now!
