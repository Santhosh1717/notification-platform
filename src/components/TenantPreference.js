import React, { useState } from "react";

const TenantPreference = () => {
  const [preferences, setPreferences] = useState([
    {
      category_id: 1,
      category_name: "Subscription Events",
      events: [
        { event_id: 1, event_name: "New Subscription Purchase", channels: [] },
        { event_id: 2, event_name: "Subscription Renewal Reminder", channels: [] },
      ],
    },
    {
      category_id: 2,
      category_name: "Appointment Events",
      events: [
        { event_id: 3, event_name: "Booking Confirmation", channels: [] },
        { event_id: 4, event_name: "Appointment Reminder", channels: [] },
      ],
    },
  ]);

  const handleToggleChannel = (categoryId, eventId, channel) => {
    setPreferences((prevPreferences) => {
      return prevPreferences.map((category) => {
        if (category.category_id === categoryId) {
          return {
            ...category,
            events: category.events.map((event) => {
              if (event.event_id === eventId) {
                const updatedChannels = event.channels.includes(channel)
                  ? event.channels.filter((ch) => ch !== channel)
                  : [...event.channels, channel];
                return { ...event, channels: updatedChannels };
              }
              return event;
            }),
          };
        }
        return category;
      });
    });
  };

  return (
    <div>
      <h2>Tenant Preferences</h2>
      {preferences.map((category) => (
        <div key={category.category_id}>
          <h3>{category.category_name}</h3>
          {category.events.map((event) => (
            <div key={event.event_id}>
              <h4>{event.event_name}</h4>
              <div>
                {["In-App", "Email", "SMS", "WhatsApp"].map((channel) => (
                  <label key={channel}>
                    <input
                      type="checkbox"
                      checked={event.channels.includes(channel)}
                      onChange={() =>
                        handleToggleChannel(category.category_id, event.event_id, channel)
                      }
                    />
                    {channel}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
      <button>Save Preferences</button>
    </div>
  );
};

export default TenantPreference;
