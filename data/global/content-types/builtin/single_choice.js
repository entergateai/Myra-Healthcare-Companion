//CHECKSUM:2a7c08c1a959d21140378645413ab367ae578bb208dd5b13d947984299af76fd
"use strict";

const base = require('./_base');

function render(data) {
  const events = [];

  if (data.typing) {
    events.push({
      type: 'typing',
      value: data.typing
    });
  }

  return [...events, {
    text: data.text,
    quick_replies: data.choices.map(c => ({
      title: c.title,
      payload: c.value.toUpperCase()
    })),
    typing: data.typing
  }];
}

function renderMessenger(data) {
  return [{
    type: 'typing',
    value: data.typing
  }, {
    text: data.text,
    quick_replies: data.choices.map(c => ({
      content_type: 'text',
      title: c.title,
      payload: c.value.toUpperCase()
    }))
  }];
}

function renderElement(data, channel) {
  if (channel === 'web' || channel === 'api' || channel === 'telegram') {
    return render(data);
  } else if (channel === 'messenger') {
    return renderMessenger(data);
  }

  return []; // TODO Handle channel not supported
}

module.exports = {
  id: 'builtin_single-choice',
  group: 'Built-in Messages',
  title: 'Single Choice',
  jsonSchema: {
    description: 'Suggest choices to the user with the intention of picking only one (with an optional message)',
    type: 'object',
    required: ['choices'],
    properties: {
      text: {
        type: 'string',
        title: 'Message'
      },
      choices: {
        type: 'array',
        title: 'Choices',
        minItems: 1,
        maxItems: 10,
        items: {
          type: 'object',
          required: ['title', 'value'],
          properties: {
            title: {
              description: 'The title of the choice (this is what gets shown to the user)',
              type: 'string',
              title: 'Message'
            },
            value: {
              description: 'The value that your bot gets when the user picks this choice (usually hidden from the user)',
              type: 'string',
              title: 'Value'
            }
          }
        }
      },
      ...base.typingIndicators
    }
  },
  uiSchema: {
    text: {
      'ui:field': 'i18n_field'
    },
    choices: {
      'ui:field': 'i18n_array'
    }
  },
  computePreviewText: formData => formData.choices && formData.text && `Choices (${formData.choices.length}) ${formData.text}`,
  renderElement: renderElement,
  hidden: true
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZV9jaG9pY2UuanMiXSwibmFtZXMiOlsiYmFzZSIsInJlcXVpcmUiLCJyZW5kZXIiLCJkYXRhIiwiZXZlbnRzIiwidHlwaW5nIiwicHVzaCIsInR5cGUiLCJ2YWx1ZSIsInRleHQiLCJxdWlja19yZXBsaWVzIiwiY2hvaWNlcyIsIm1hcCIsImMiLCJ0aXRsZSIsInBheWxvYWQiLCJ0b1VwcGVyQ2FzZSIsInJlbmRlck1lc3NlbmdlciIsImNvbnRlbnRfdHlwZSIsInJlbmRlckVsZW1lbnQiLCJjaGFubmVsIiwibW9kdWxlIiwiZXhwb3J0cyIsImlkIiwiZ3JvdXAiLCJqc29uU2NoZW1hIiwiZGVzY3JpcHRpb24iLCJyZXF1aXJlZCIsInByb3BlcnRpZXMiLCJtaW5JdGVtcyIsIm1heEl0ZW1zIiwiaXRlbXMiLCJ0eXBpbmdJbmRpY2F0b3JzIiwidWlTY2hlbWEiLCJjb21wdXRlUHJldmlld1RleHQiLCJmb3JtRGF0YSIsImxlbmd0aCIsImhpZGRlbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXBCOztBQUVBLFNBQVNDLE1BQVQsQ0FBZ0JDLElBQWhCLEVBQXNCO0FBQ3BCLFFBQU1DLE1BQU0sR0FBRyxFQUFmOztBQUVBLE1BQUlELElBQUksQ0FBQ0UsTUFBVCxFQUFpQjtBQUNmRCxJQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWTtBQUNWQyxNQUFBQSxJQUFJLEVBQUUsUUFESTtBQUVWQyxNQUFBQSxLQUFLLEVBQUVMLElBQUksQ0FBQ0U7QUFGRixLQUFaO0FBSUQ7O0FBRUQsU0FBTyxDQUNMLEdBQUdELE1BREUsRUFFTDtBQUNFSyxJQUFBQSxJQUFJLEVBQUVOLElBQUksQ0FBQ00sSUFEYjtBQUVFQyxJQUFBQSxhQUFhLEVBQUVQLElBQUksQ0FBQ1EsT0FBTCxDQUFhQyxHQUFiLENBQWlCQyxDQUFDLEtBQUs7QUFDcENDLE1BQUFBLEtBQUssRUFBRUQsQ0FBQyxDQUFDQyxLQUQyQjtBQUVwQ0MsTUFBQUEsT0FBTyxFQUFFRixDQUFDLENBQUNMLEtBQUYsQ0FBUVEsV0FBUjtBQUYyQixLQUFMLENBQWxCLENBRmpCO0FBTUVYLElBQUFBLE1BQU0sRUFBRUYsSUFBSSxDQUFDRTtBQU5mLEdBRkssQ0FBUDtBQVdEOztBQUVELFNBQVNZLGVBQVQsQ0FBeUJkLElBQXpCLEVBQStCO0FBQzdCLFNBQU8sQ0FDTDtBQUNFSSxJQUFBQSxJQUFJLEVBQUUsUUFEUjtBQUVFQyxJQUFBQSxLQUFLLEVBQUVMLElBQUksQ0FBQ0U7QUFGZCxHQURLLEVBS0w7QUFDRUksSUFBQUEsSUFBSSxFQUFFTixJQUFJLENBQUNNLElBRGI7QUFFRUMsSUFBQUEsYUFBYSxFQUFFUCxJQUFJLENBQUNRLE9BQUwsQ0FBYUMsR0FBYixDQUFpQkMsQ0FBQyxLQUFLO0FBQ3BDSyxNQUFBQSxZQUFZLEVBQUUsTUFEc0I7QUFFcENKLE1BQUFBLEtBQUssRUFBRUQsQ0FBQyxDQUFDQyxLQUYyQjtBQUdwQ0MsTUFBQUEsT0FBTyxFQUFFRixDQUFDLENBQUNMLEtBQUYsQ0FBUVEsV0FBUjtBQUgyQixLQUFMLENBQWxCO0FBRmpCLEdBTEssQ0FBUDtBQWNEOztBQUVELFNBQVNHLGFBQVQsQ0FBdUJoQixJQUF2QixFQUE2QmlCLE9BQTdCLEVBQXNDO0FBQ3BDLE1BQUlBLE9BQU8sS0FBSyxLQUFaLElBQXFCQSxPQUFPLEtBQUssS0FBakMsSUFBMENBLE9BQU8sS0FBSyxVQUExRCxFQUFzRTtBQUNwRSxXQUFPbEIsTUFBTSxDQUFDQyxJQUFELENBQWI7QUFDRCxHQUZELE1BRU8sSUFBSWlCLE9BQU8sS0FBSyxXQUFoQixFQUE2QjtBQUNsQyxXQUFPSCxlQUFlLENBQUNkLElBQUQsQ0FBdEI7QUFDRDs7QUFFRCxTQUFPLEVBQVAsQ0FQb0MsQ0FPMUI7QUFDWDs7QUFFRGtCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxFQUFBQSxFQUFFLEVBQUUsdUJBRFc7QUFFZkMsRUFBQUEsS0FBSyxFQUFFLG1CQUZRO0FBR2ZWLEVBQUFBLEtBQUssRUFBRSxlQUhRO0FBS2ZXLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxXQUFXLEVBQUUsK0ZBREg7QUFFVm5CLElBQUFBLElBQUksRUFBRSxRQUZJO0FBR1ZvQixJQUFBQSxRQUFRLEVBQUUsQ0FBQyxTQUFELENBSEE7QUFJVkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1ZuQixNQUFBQSxJQUFJLEVBQUU7QUFDSkYsUUFBQUEsSUFBSSxFQUFFLFFBREY7QUFFSk8sUUFBQUEsS0FBSyxFQUFFO0FBRkgsT0FESTtBQUtWSCxNQUFBQSxPQUFPLEVBQUU7QUFDUEosUUFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUE8sUUFBQUEsS0FBSyxFQUFFLFNBRkE7QUFHUGUsUUFBQUEsUUFBUSxFQUFFLENBSEg7QUFJUEMsUUFBQUEsUUFBUSxFQUFFLEVBSkg7QUFLUEMsUUFBQUEsS0FBSyxFQUFFO0FBQ0x4QixVQUFBQSxJQUFJLEVBQUUsUUFERDtBQUVMb0IsVUFBQUEsUUFBUSxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FGTDtBQUdMQyxVQUFBQSxVQUFVLEVBQUU7QUFDVmQsWUFBQUEsS0FBSyxFQUFFO0FBQ0xZLGNBQUFBLFdBQVcsRUFBRSwrREFEUjtBQUVMbkIsY0FBQUEsSUFBSSxFQUFFLFFBRkQ7QUFHTE8sY0FBQUEsS0FBSyxFQUFFO0FBSEYsYUFERztBQU1WTixZQUFBQSxLQUFLLEVBQUU7QUFDTGtCLGNBQUFBLFdBQVcsRUFDVCw2RkFGRztBQUdMbkIsY0FBQUEsSUFBSSxFQUFFLFFBSEQ7QUFJTE8sY0FBQUEsS0FBSyxFQUFFO0FBSkY7QUFORztBQUhQO0FBTEEsT0FMQztBQTRCVixTQUFHZCxJQUFJLENBQUNnQztBQTVCRTtBQUpGLEdBTEc7QUF5Q2ZDLEVBQUFBLFFBQVEsRUFBRTtBQUNSeEIsSUFBQUEsSUFBSSxFQUFFO0FBQ0osa0JBQVk7QUFEUixLQURFO0FBSVJFLElBQUFBLE9BQU8sRUFBRTtBQUNQLGtCQUFZO0FBREw7QUFKRCxHQXpDSztBQWlEZnVCLEVBQUFBLGtCQUFrQixFQUFFQyxRQUFRLElBQzFCQSxRQUFRLENBQUN4QixPQUFULElBQW9Cd0IsUUFBUSxDQUFDMUIsSUFBN0IsSUFBc0MsWUFBVzBCLFFBQVEsQ0FBQ3hCLE9BQVQsQ0FBaUJ5QixNQUFPLEtBQUlELFFBQVEsQ0FBQzFCLElBQUssRUFsRDlFO0FBbURmVSxFQUFBQSxhQUFhLEVBQUVBLGFBbkRBO0FBb0Rma0IsRUFBQUEsTUFBTSxFQUFFO0FBcERPLENBQWpCIiwic291cmNlUm9vdCI6Ii92YXIvbGliL2plbmtpbnMvd29ya3NwYWNlL2J1aWxkLXdpbmRvd3MvbW9kdWxlcy9idWlsdGluL3NyYy9iYWNrZW5kIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmFzZSA9IHJlcXVpcmUoJy4vX2Jhc2UnKVxuXG5mdW5jdGlvbiByZW5kZXIoZGF0YSkge1xuICBjb25zdCBldmVudHMgPSBbXVxuXG4gIGlmIChkYXRhLnR5cGluZykge1xuICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgIHR5cGU6ICd0eXBpbmcnLFxuICAgICAgdmFsdWU6IGRhdGEudHlwaW5nXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBbXG4gICAgLi4uZXZlbnRzLFxuICAgIHtcbiAgICAgIHRleHQ6IGRhdGEudGV4dCxcbiAgICAgIHF1aWNrX3JlcGxpZXM6IGRhdGEuY2hvaWNlcy5tYXAoYyA9PiAoe1xuICAgICAgICB0aXRsZTogYy50aXRsZSxcbiAgICAgICAgcGF5bG9hZDogYy52YWx1ZS50b1VwcGVyQ2FzZSgpXG4gICAgICB9KSksXG4gICAgICB0eXBpbmc6IGRhdGEudHlwaW5nXG4gICAgfVxuICBdXG59XG5cbmZ1bmN0aW9uIHJlbmRlck1lc3NlbmdlcihkYXRhKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgdHlwZTogJ3R5cGluZycsXG4gICAgICB2YWx1ZTogZGF0YS50eXBpbmdcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IGRhdGEudGV4dCxcbiAgICAgIHF1aWNrX3JlcGxpZXM6IGRhdGEuY2hvaWNlcy5tYXAoYyA9PiAoe1xuICAgICAgICBjb250ZW50X3R5cGU6ICd0ZXh0JyxcbiAgICAgICAgdGl0bGU6IGMudGl0bGUsXG4gICAgICAgIHBheWxvYWQ6IGMudmFsdWUudG9VcHBlckNhc2UoKVxuICAgICAgfSkpXG4gICAgfVxuICBdXG59XG5cbmZ1bmN0aW9uIHJlbmRlckVsZW1lbnQoZGF0YSwgY2hhbm5lbCkge1xuICBpZiAoY2hhbm5lbCA9PT0gJ3dlYicgfHwgY2hhbm5lbCA9PT0gJ2FwaScgfHwgY2hhbm5lbCA9PT0gJ3RlbGVncmFtJykge1xuICAgIHJldHVybiByZW5kZXIoZGF0YSlcbiAgfSBlbHNlIGlmIChjaGFubmVsID09PSAnbWVzc2VuZ2VyJykge1xuICAgIHJldHVybiByZW5kZXJNZXNzZW5nZXIoZGF0YSlcbiAgfVxuXG4gIHJldHVybiBbXSAvLyBUT0RPIEhhbmRsZSBjaGFubmVsIG5vdCBzdXBwb3J0ZWRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlkOiAnYnVpbHRpbl9zaW5nbGUtY2hvaWNlJyxcbiAgZ3JvdXA6ICdCdWlsdC1pbiBNZXNzYWdlcycsXG4gIHRpdGxlOiAnU2luZ2xlIENob2ljZScsXG5cbiAganNvblNjaGVtYToge1xuICAgIGRlc2NyaXB0aW9uOiAnU3VnZ2VzdCBjaG9pY2VzIHRvIHRoZSB1c2VyIHdpdGggdGhlIGludGVudGlvbiBvZiBwaWNraW5nIG9ubHkgb25lICh3aXRoIGFuIG9wdGlvbmFsIG1lc3NhZ2UpJyxcbiAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICByZXF1aXJlZDogWydjaG9pY2VzJ10sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgdGV4dDoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgdGl0bGU6ICdNZXNzYWdlJ1xuICAgICAgfSxcbiAgICAgIGNob2ljZXM6IHtcbiAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgdGl0bGU6ICdDaG9pY2VzJyxcbiAgICAgICAgbWluSXRlbXM6IDEsXG4gICAgICAgIG1heEl0ZW1zOiAxMCxcbiAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICByZXF1aXJlZDogWyd0aXRsZScsICd2YWx1ZSddLFxuICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIHRpdGxlIG9mIHRoZSBjaG9pY2UgKHRoaXMgaXMgd2hhdCBnZXRzIHNob3duIHRvIHRoZSB1c2VyKScsXG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICB0aXRsZTogJ01lc3NhZ2UnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgJ1RoZSB2YWx1ZSB0aGF0IHlvdXIgYm90IGdldHMgd2hlbiB0aGUgdXNlciBwaWNrcyB0aGlzIGNob2ljZSAodXN1YWxseSBoaWRkZW4gZnJvbSB0aGUgdXNlciknLFxuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdWYWx1ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAuLi5iYXNlLnR5cGluZ0luZGljYXRvcnNcbiAgICB9XG4gIH0sXG5cbiAgdWlTY2hlbWE6IHtcbiAgICB0ZXh0OiB7XG4gICAgICAndWk6ZmllbGQnOiAnaTE4bl9maWVsZCdcbiAgICB9LFxuICAgIGNob2ljZXM6IHtcbiAgICAgICd1aTpmaWVsZCc6ICdpMThuX2FycmF5J1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZVByZXZpZXdUZXh0OiBmb3JtRGF0YSA9PlxuICAgIGZvcm1EYXRhLmNob2ljZXMgJiYgZm9ybURhdGEudGV4dCAmJiBgQ2hvaWNlcyAoJHtmb3JtRGF0YS5jaG9pY2VzLmxlbmd0aH0pICR7Zm9ybURhdGEudGV4dH1gLFxuICByZW5kZXJFbGVtZW50OiByZW5kZXJFbGVtZW50LFxuICBoaWRkZW46IHRydWVcbn1cbiJdfQ==