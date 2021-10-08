//const apiBaseURL = "http://localhost:5000/api/Bookmarks";
const apiBaseURL= "https://glitch.com/edit/#!/ambiguous-peaceful-broccoli?path=README.md%3A1%3A0";

function webAPI_getBookmarks(successCallBack, errorCallBack) {
  $.ajax({
    url: apiBaseURL,
    type: "GET",
    contentType: "text/plain",
    data: {},
    success: (bookmarks) => {
      successCallBack(bookmarks);
      console.log("webAPI_getBookmarks - success");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      errorCallBack(errorThrown);
      console.log("webAPI_getBookmarks - error");
    },
  });
}

function webAPI_getBookmarksSort(type, successCallBack, errorCallBack) {
  $.ajax({
    url: apiBaseURL + "?" + "sort=" + type,
    type: "GET",
    contentType: "text/plain",
    data: {},
    success: (bookmarks) => {
      successCallBack(bookmarks);
      console.log("webAPI_getBookmarksName - success");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      errorCallBack(errorThrown);
      console.log("webAPI_getBookmarks - error");
    },
  });
}

function webAPI_getBookmarksName(name, successCallBack, errorCallBack) {
  $.ajax({
    url: apiBaseURL + "?" + "name=" + name,
    type: "GET",
    contentType: "text/plain",
    data: {},
    success: (bookmarks) => {
      successCallBack(bookmarks);
      console.log("webAPI_getBookmarksName - success");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      errorCallBack(errorThrown);
      console.log("webAPI_getBookmarks - error");
    },
  });
}

function webAPI_getBookmarksCategory(category, successCallBack, errorCallBack) {
  $.ajax({
    url: apiBaseURL + "?" + "category=" + category,
    type: "GET",
    contentType: "text/plain",
    data: {},
    success: (bookmarks) => {
      successCallBack(bookmarks);
      console.log("webAPI_getBookmarksCategory - success");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      errorCallBack(errorThrown);
      console.log("webAPI_getBookmarks - error");
    },
  });
}

function webAPI_getBookmark(id, successCallBack, errorCallBack) {
  $.ajax({
    url: apiBaseURL + "/" + id,
    type: "GET",
    contentType: "text/plain",
    data: {},
    success: (bookmark) => {
      successCallBack(bookmark);
      console.log("webAPI_getBookmark - success");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      errorCallBack(errorThrown);
      console.log("webAPI_getBookmark- error");
    },
  });
}

function webAPI_addBookmark(bookmark, successCallBack, errorCallBack) {
  console.log("add", bookmark);
  $.ajax({
    url: apiBaseURL,
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(bookmark),
    success: () => {
      successCallBack();
      console.log("webAPI_addBookmarks - success");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      errorCallBack(errorThrown);
      console.log("webAPI_addBookmarks - error");
    },
  });
}

function webAPI_modifyBookmark(bookmark, successCallBack, errorCallBack) {
  console.log("modify", bookmark);
  $.ajax({
    url: apiBaseURL + "/" + bookmark.Id,
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify(bookmark),
    success: () => {
      successCallBack();
      console.log("webAPI_modifyBookmarks - success");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      errorCallBack(errorThrown);
      console.log("webAPI_modifyBookmarks - error");
    },
  });
}

function webAPI_deleteBookmark(id, successCallBack, errorCallBack) {
  $.ajax({
    url: apiBaseURL + "/" + id,
    type: "DELETE",
    success: () => {
      successCallBack();
      console.log("webAPI_deleteBookmark - success");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      errorCallBack(errorThrown);
      console.log("webAPI_deleteBookmark - error");
    },
  });
}
