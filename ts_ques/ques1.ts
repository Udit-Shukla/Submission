// You have 3 timestamps for list of users along with the device details : logged_in, logged_out, and lastSeenAt (for the device during the log in period). Please note: Users can log in from multiple devices, users are generally logged in for a longer duration of time 6 months or so.

interface Timestamp{
    logged_in: Date;
    logged_out: Date;
    lastSeenAt: Date;
}

interface Device{
    device_id: string;
    timestamp: Timestamp[];
}

interface User{
    user_id: string;
    devices: Device[];
}

const users: User[] = [
{
    user_id: "user1",
    devices: [
        {
            device_id: "device1",
            timestamp: [
                {
                    logged_in: new Date("2021-01-01"),
                    logged_out: new Date("2021-01-02"),
                    lastSeenAt: new Date("2021-01-02")
                },
                {
                    logged_in: new Date("2021-02-05"),
                    logged_out: new Date("2021-03-06"),
                    lastSeenAt: new Date("2021-03-06")
                },
            ]
        },
        {
            device_id: "device2",
            timestamp: [
                {
                    logged_in: new Date("2024-06-03"),
                    logged_out: new Date("2024-06-04"),
                    lastSeenAt: new Date("2024-06-04")
                }
            ]
        }
    ]
},
{
    user_id: "user2",
    devices: [
        {
            device_id: "device3",
            timestamp: [
                {
                    logged_in: new Date("2021-01-01"),
                    logged_out: new Date("2021-01-02"),
                    lastSeenAt: new Date("2021-01-02")
                }
            ]
        }
    ]
}
]

// Find the list of users who have logged in from multiple devices in the in a month and number of active users 

function getMonthlyLoggedInUsers(users: User[]): { [month: string]: number } {
    const monthlyLoggedIn: { [month: string]: number } = {};
  
    users.forEach((user) => {
      user.devices.forEach((device) => {
        device.timestamp.forEach((timestamp) => {
          const month = timestamp.logged_in.toLocaleString('en-US', { month: 'long' });
          if (!monthlyLoggedIn[month]) {
            monthlyLoggedIn[month] = 0;
          }
          monthlyLoggedIn[month]++;
        
        });
      });
    });
  
    return monthlyLoggedIn;
  }
  
  function getActiveUsersInMonth(users: User[], month: string): Set<User> { 
    const activeUsers: Set<User> = new Set();
  users.forEach((user) => {
    user.devices.forEach((device) => {
      device.timestamp.forEach((timestamp) => {
        if (timestamp.logged_in.toLocaleString('en-US', { month: 'long' }) === month) {
            activeUsers.add(user);


          return; 
        }
      });
    });
  });

  return activeUsers;
}
  
  const monthlyLoggedInUsers = getMonthlyLoggedInUsers(users);
  const monthlyActiveUsers = getActiveUsersInMonth(users,"June");
  
  console.log(monthlyLoggedInUsers);
  console.log(monthlyActiveUsers);