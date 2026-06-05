import {
  useNotification,
} from "../../context/NotificationContext";

export default function Notifications() {
  const {
    notifications,
    unreadCount,
    markAsRead,
    deleteNotification,
    clearNotifications,
  } = useNotification();

  return (
    <div className="glass p-6 rounded-3xl">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Notifications
        </h2>

        <div className="flex items-center gap-3">

          <span
            className="
            bg-red-500
            text-white
            text-xs
            px-3
            py-1
            rounded-full
            "
          >
            {unreadCount} New
          </span>

          {notifications.length > 0 && (
            <button
              onClick={clearNotifications}
              className="
              text-sm
              bg-red-500
              px-3
              py-1
              rounded-lg
              "
            >
              Clear All
            </button>
          )}

        </div>

      </div>

      {notifications.length === 0 ? (

        <p className="text-gray-400">
          No Notifications
        </p>

      ) : (

        <div className="space-y-4">

          {notifications.map(
            (notification) => (

              <div
                key={notification.id}
                className={`
                  p-4
                  rounded-xl
                  border
                  ${
                    notification.read
                      ? "bg-white/5 border-white/10"
                      : "bg-cyan-500/10 border-cyan-500/30"
                  }
                `}
              >

                <div className="flex justify-between gap-4">

                  <div>

                    <p>
                      {notification.message}
                    </p>

                    <p
                      className="
                      text-xs
                      text-gray-400
                      mt-2
                      "
                    >
                      {notification.createdAt}
                    </p>

                  </div>

                  <div className="flex gap-2">

                    {!notification.read && (
                      <button
                        onClick={() =>
                          markAsRead(
                            notification.id
                          )
                        }
                        className="
                        text-xs
                        bg-green-500
                        px-3
                        py-1
                        rounded-lg
                        "
                      >
                        Read
                      </button>
                    )}

                    <button
                      onClick={() =>
                        deleteNotification(
                          notification.id
                        )
                      }
                      className="
                      text-xs
                      bg-red-500
                      px-3
                      py-1
                      rounded-lg
                      "
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      )}

    </div>
  );
}