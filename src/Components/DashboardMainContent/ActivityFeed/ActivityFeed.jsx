import React from 'react';
import "./ActivityFeed.css";
const ActivityFeed = () => {
  // Data structure representing the activity bars for each day
  const activityData = {
    Mon: [
      { height: 60, color: 'teal' },
      { height: 40, color: 'teal' },
      { height: 30, color: 'gray' }
    ],
    Tues: [
      { height: 80, color: 'teal' },
      { height: 90, color: 'teal' },
      { height: 70, color: 'purple' },
      { height: 60, color: 'purple' },
      { height: 25, color: 'gray' },
      { height: 50, color: 'teal' },
      { height: 35, color: 'gray' }
    ],
    Wed: [
      { height: 30, color: 'gray' },
      { height: 45, color: 'teal' },
      { height: 55, color: 'purple' },
      { height: 40, color: 'purple' },
      { height: 25, color: 'gray' }
    ],
    Thurs: [
      { height: 35, color: 'gray' },
      { height: 50, color: 'teal' },
      { height: 45, color: 'teal' },
      { height: 70, color: 'purple' },
      { height: 40, color: 'gray' }
    ],
    Fri: [
      { height: 80, color: 'teal' },
      { height: 70, color: 'teal' },
      { height: 60, color: 'teal' },
      { height: 50, color: 'purple' },
      { height: 45, color: 'gray' }
    ],
    Sat: [
      { height: 30, color: 'gray' },
      { height: 40, color: 'gray' },
      { height: 55, color: 'purple' },
      { height: 35, color: 'gray' }
    ],
    Sun: [
      { height: 45, color: 'teal' },
      { height: 60, color: 'teal' },
      { height: 50, color: 'purple' },
      { height: 35, color: 'gray' }
    ]
  };

  const days = Object.keys(activityData);

  const getBarColorClass = (color) => {
    switch (color) {
      case 'teal':
        return 'bar-teal';
      case 'purple':
        return 'bar-purple';
      default:
        return 'bar-gray';
    }
  };

  return (
    <>
      <div className="activity-container">
        {/* Header */}
        <div className="activity-header">
          <h2 className="activity-title">Activity</h2>
          <span className="activity-subtitle">3 appointment on this week</span>
        </div>

        {/* Chart Container */}
        <div className="chart-container">
          {days.map((day, dayIndex) => (
            <div key={day} className="day-column">
              {/* Bars Container */}
              <div className="bars-container">
                {activityData[day].map((bar, barIndex) => (
                  <div
                    key={barIndex}
                    className={`activity-bar ${getBarColorClass(bar.color)}`}
                    style={{
                      height: `${bar.height}px`
                    }}
                  />
                ))}
              </div>
              
              {/* Day Label */}
              <span className="day-label">{day}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ActivityFeed;