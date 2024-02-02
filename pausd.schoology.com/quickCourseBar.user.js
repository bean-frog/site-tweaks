// ==UserScript==
// @name         pausd schoology quick coursebar
// @namespace    http://tampermonkey.net/
// @version      2024-02-01
// @description  appends a new section under the header with quick links to all your courses.
// @author       You
// @match        https://pausd.schoology.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=schoology.com
// @grant        none
// ==/UserScript==
(async function() {
    'use strict';

    async function attemptCourseFetch() {
        try {
            const response = await fetch('https://pausd.schoology.com/iapi2/site-navigation/courses', { 
                method: 'GET'
            });
            const data = await response.json();
            localStorage.setItem("coursesCache", JSON.stringify(data));
            return data;
        } catch (error) {
            console.error('Error fetching courses:', error);
            throw error;
        }
    }

    try {
        let courseList;
        const cachedCourses = localStorage.getItem("coursesCache");
        if (cachedCourses) {
            courseList = JSON.parse(cachedCourses);
            createCourseBar(courseList);
        } else {
            courseList = await attemptCourseFetch();
            createCourseBar(courseList);
        }
    } catch (error) {
        console.error('Error:', error);
    }

    function createCourseBar(courseList) {
        let html = `
        <div style="position:relative; display:flex; flex-direction: row; justify-content: center; gap:15px; background-color: rgb(26, 105, 0);"id="coursebar"></div>
        `;
        document.getElementById("header").insertAdjacentHTML("afterend", html);
        courseList.data.courses.forEach(course => {
            document.getElementById("coursebar").insertAdjacentHTML("afterbegin", `
            <a style="color:white" href="https://pausd.schoology.com/course/${course.nid}/materials">${course.courseTitle}</a>
            `);
        });
    }
})();
