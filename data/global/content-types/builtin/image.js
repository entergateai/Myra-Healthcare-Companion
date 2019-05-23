//CHECKSUM:a5a2ae1a9a63b9c7a3e2291f02237fd29acb8053593f9c232c2fa5d38f22f8b1
"use strict";

const base = require('./_base');

const path = require('path');

const url = require('url');

const {
  tail
} = _;

function render(data) {
  const events = [];

  if (data.typing) {
    events.push({
      type: 'typing',
      value: data.typing
    });
  }

  return [...events, {
    type: 'file',
    url: url.resolve(data.BOT_URL, data.image)
  }];
}

function renderMessenger(data) {
  return [{
    type: 'typing',
    value: data.typing
  }, {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'generic',
        elements: [{
          title: data.title,
          image_url: url.resolve(data.BOT_URL, data.image)
        }]
      }
    }
  }];
}

function renderElement(data, channel) {
  if (channel === 'web' || channel === 'api') {
    return render(data);
  } else if (channel === 'messenger') {
    return renderMessenger(data);
  }

  return []; // TODO Handle channel not supported
}

module.exports = {
  id: 'builtin_image',
  group: 'Built-in Messages',
  title: 'Image',
  jsonSchema: {
    description: 'A message showing an image with an optional title',
    type: 'object',
    required: ['image'],
    properties: {
      image: {
        type: 'string',
        $subtype: 'media',
        $filter: '.jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*',
        title: 'Image'
      },
      title: {
        type: 'string',
        description: 'Some platforms require to name the images.',
        title: 'Title (optional)'
      },
      ...base.typingIndicators
    }
  },
  uiSchema: {
    title: {
      'ui:field': 'i18n_field'
    }
  },
  computePreviewText: formData => {
    if (!formData.image) {
      return;
    }

    let fileName = path.basename(formData.image);

    if (fileName.includes('-')) {
      fileName = tail(fileName.split('-')).join('-');
    }

    const title = formData.title ? ' | ' + formData.title : '';
    return `Image (${fileName}) ${title}`;
  },
  renderElement: renderElement
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLmpzIl0sIm5hbWVzIjpbImJhc2UiLCJyZXF1aXJlIiwicGF0aCIsInVybCIsInRhaWwiLCJfIiwicmVuZGVyIiwiZGF0YSIsImV2ZW50cyIsInR5cGluZyIsInB1c2giLCJ0eXBlIiwidmFsdWUiLCJyZXNvbHZlIiwiQk9UX1VSTCIsImltYWdlIiwicmVuZGVyTWVzc2VuZ2VyIiwiYXR0YWNobWVudCIsInBheWxvYWQiLCJ0ZW1wbGF0ZV90eXBlIiwiZWxlbWVudHMiLCJ0aXRsZSIsImltYWdlX3VybCIsInJlbmRlckVsZW1lbnQiLCJjaGFubmVsIiwibW9kdWxlIiwiZXhwb3J0cyIsImlkIiwiZ3JvdXAiLCJqc29uU2NoZW1hIiwiZGVzY3JpcHRpb24iLCJyZXF1aXJlZCIsInByb3BlcnRpZXMiLCIkc3VidHlwZSIsIiRmaWx0ZXIiLCJ0eXBpbmdJbmRpY2F0b3JzIiwidWlTY2hlbWEiLCJjb21wdXRlUHJldmlld1RleHQiLCJmb3JtRGF0YSIsImZpbGVOYW1lIiwiYmFzZW5hbWUiLCJpbmNsdWRlcyIsInNwbGl0Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXBCOztBQUNBLE1BQU1DLElBQUksR0FBR0QsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBQ0EsTUFBTUUsR0FBRyxHQUFHRixPQUFPLENBQUMsS0FBRCxDQUFuQjs7QUFDQSxNQUFNO0FBQUVHLEVBQUFBO0FBQUYsSUFBV0MsQ0FBakI7O0FBRUEsU0FBU0MsTUFBVCxDQUFnQkMsSUFBaEIsRUFBc0I7QUFDcEIsUUFBTUMsTUFBTSxHQUFHLEVBQWY7O0FBRUEsTUFBSUQsSUFBSSxDQUFDRSxNQUFULEVBQWlCO0FBQ2ZELElBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZO0FBQ1ZDLE1BQUFBLElBQUksRUFBRSxRQURJO0FBRVZDLE1BQUFBLEtBQUssRUFBRUwsSUFBSSxDQUFDRTtBQUZGLEtBQVo7QUFJRDs7QUFFRCxTQUFP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VCxHQUFpQixRQUFRaUIsUUFBUSxDQUFDakIsS0FBbEMsR0FBMEMsRUFBeEQ7QUFDQSxXQUFRLFVBQVNrQixRQUFTLEtBQUlsQixLQUFNLEVBQXBDO0FBQ0QsR0EzQ2M7QUE2Q2ZFLEVBQUFBLGFBQWEsRUFBRUE7QUE3Q0EsQ0FBakIiLCJzb3VyY2VSb290IjoiL3Zhci9saWIvamVua2lucy93b3Jrc3BhY2UvYnVpbGQtd2luZG93cy9tb2R1bGVzL2J1aWx0aW4vc3JjL2JhY2tlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYXNlID0gcmVxdWlyZSgnLi9fYmFzZScpXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCB1cmwgPSByZXF1aXJlKCd1cmwnKVxuY29uc3QgeyB0YWlsIH0gPSBfXG5cbmZ1bmN0aW9uIHJlbmRlcihkYXRhKSB7XG4gIGNvbnN0IGV2ZW50cyA9IFtdXG5cbiAgaWYgKGRhdGEudHlwaW5nKSB7XG4gICAgZXZlbnRzLnB1c2goe1xuICAgICAgdHlwZTogJ3R5cGluZycsXG4gICAgICB2YWx1ZTogZGF0YS50eXBpbmdcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIFtcbiAgICAuLi5ldmVudHMsXG4gICAge1xuICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgdXJsOiB1cmwucmVzb2x2ZShkYXRhLkJPVF9VUkwsIGRhdGEuaW1hZ2UpXG4gICAgfVxuICBdXG59XG5cbmZ1bmN0aW9uIHJlbmRlck1lc3NlbmdlcihkYXRhKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgdHlwZTogJ3R5cGluZycsXG4gICAgICB2YWx1ZTogZGF0YS50eXBpbmdcbiAgICB9LFxuICAgIHtcbiAgICAgIGF0dGFjaG1lbnQ6IHtcbiAgICAgICAgdHlwZTogJ3RlbXBsYXRlJyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIHRlbXBsYXRlX3R5cGU6ICdnZW5lcmljJyxcbiAgICAgICAgICBlbGVtZW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgaW1hZ2VfdXJsOiB1cmwucmVzb2x2ZShkYXRhLkJPVF9VUkwsIGRhdGEuaW1hZ2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cbmZ1bmN0aW9uIHJlbmRlckVsZW1lbnQoZGF0YSwgY2hhbm5lbCkge1xuICBpZiAoY2hhbm5lbCA9PT0gJ3dlYicgfHwgY2hhbm5lbCA9PT0gJ2FwaScpIHtcbiAgICByZXR1cm4gcmVuZGVyKGRhdGEpXG4gIH0gZWxzZSBpZiAoY2hhbm5lbCA9PT0gJ21lc3NlbmdlcicpIHtcbiAgICByZXR1cm4gcmVuZGVyTWVzc2VuZ2VyKGRhdGEpXG4gIH1cblxuICByZXR1cm4gW10gLy8gVE9ETyBIYW5kbGUgY2hhbm5lbCBub3Qgc3VwcG9ydGVkXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpZDogJ2J1aWx0aW5faW1hZ2UnLFxuICBncm91cDogJ0J1aWx0LWluIE1lc3NhZ2VzJyxcbiAgdGl0bGU6ICdJbWFnZScsXG5cbiAganNvblNjaGVtYToge1xuICAgIGRlc2NyaXB0aW9uOiAnQSBtZXNzYWdlIHNob3dpbmcgYW4gaW1hZ2Ugd2l0aCBhbiBvcHRpb25hbCB0aXRsZScsXG4gICAgdHlwZTogJ29iamVjdCcsXG4gICAgcmVxdWlyZWQ6IFsnaW1hZ2UnXSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBpbWFnZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgJHN1YnR5cGU6ICdtZWRpYScsXG4gICAgICAgICRmaWx0ZXI6ICcuanBnLCAucG5nLCAuanBlZywgLmdpZiwgLmJtcCwgLnRpZiwgLnRpZmZ8aW1hZ2UvKicsXG4gICAgICAgIHRpdGxlOiAnSW1hZ2UnXG4gICAgICB9LFxuICAgICAgdGl0bGU6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU29tZSBwbGF0Zm9ybXMgcmVxdWlyZSB0byBuYW1lIHRoZSBpbWFnZXMuJyxcbiAgICAgICAgdGl0bGU6ICdUaXRsZSAob3B0aW9uYWwpJ1xuICAgICAgfSxcbiAgICAgIC4uLmJhc2UudHlwaW5nSW5kaWNhdG9yc1xuICAgIH1cbiAgfSxcblxuICB1aVNjaGVtYToge1xuICAgIHRpdGxlOiB7XG4gICAgICAndWk6ZmllbGQnOiAnaTE4bl9maWVsZCdcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZVByZXZpZXdUZXh0OiBmb3JtRGF0YSA9PiB7XG4gICAgaWYgKCFmb3JtRGF0YS5pbWFnZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZpbGVOYW1lID0gcGF0aC5iYXNlbmFtZShmb3JtRGF0YS5pbWFnZSlcbiAgICBpZiAoZmlsZU5hbWUuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgZmlsZU5hbWUgPSB0YWlsKGZpbGVOYW1lLnNwbGl0KCctJykpLmpvaW4oJy0nKVxuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gZm9ybURhdGEudGl0bGUgPyAnIHwgJyArIGZvcm1EYXRhLnRpdGxlIDogJydcbiAgICByZXR1cm4gYEltYWdlICgke2ZpbGVOYW1lfSkgJHt0aXRsZX1gXG4gIH0sXG5cbiAgcmVuZGVyRWxlbWVudDogcmVuZGVyRWxlbWVudFxufVxuIl19