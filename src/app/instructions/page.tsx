import React from "react";

function page() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-[23px] font-medium">My to-do list</h1>
      </div>
      <div className="mt-2">
        <p className="mt-1 mb-1 text-[15px]">
          Overview: My Todo List is an app designed to help you organize all the
          tasks you have in mind in one place, in a simple and practical way.
        </p>
        <h3 className="text-[20px] font-normal mt-1 mb-1">Main Features:</h3>
        <ul className="list-disc pl-5 text-[15px]">
          <li>Easily add, edit, and delete tasks as needed.</li>
          <li>
            Mark your tasks as completed to move on to the next one without
            losing track of your progress.
          </li>
        </ul>
        <h3 className="text-[20px] font-normal mt-1 mb-1">Login and access:</h3>
        <ul className="list-disc pl-5 text-[15px]">
          <li>
            You can log in using Google or with your email address and password.
          </li>
          <li>
            We recommend subscribing to access your task history and
            personalized statistics.
          </li>
          <li>
            If you do not subscribe, you can use the app to manage your daily
            tasks, but without saving logs or history.
          </li>
        </ul>
        <h3 className="text-[20px] font-normal mt-1 mb-1">
          History and Auto Save:
        </h3>
        <ul className="list-disc pl-5 text-[15px]">
          <li>
            The app keeps a history of all your completed tasks, available only
            to registered and subscribed users.
          </li>
          <li>
            You do not need to worry about saving them manually, because at the
            end of each day your information is automatically saved to your
            account.
          </li>
        </ul>
        <h3 className="text-[20px] font-normal mt-1 mb-1">Aim:</h3>
        <p className="mt-1 mb-1 text-[15px]">
          Our goal is to help you keep your day more organized, with clear
          goals, and stress-free. We hope My Todo List is a useful tool that
          makes your productivity and daily management easier.
        </p>
      </div>
    </div>
  );
}

export default page;
