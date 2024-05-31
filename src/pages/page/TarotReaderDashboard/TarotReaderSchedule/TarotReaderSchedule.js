import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function TarotReaderSchedule() {    
    const viLocale = {
        locale: 'vi',
        buttonText: {
            today: 'Hôm nay',
            month: 'Tháng',
            week: 'Tuần',
            day: 'Ngày',
            list: 'Danh sách'
        },
        weekLabel: 'Tuần',
        allDayText: 'Cả ngày',
        slotDuration: '00:30:00',
        slotLabelFormat: {
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: false,
            meridiem: 'short'
        },
        dayPopoverFormat: { weekday: 'long', month: 'long', day: 'numeric' }
    };

    return (
        <div>
            <div className="row">
                <h1 className="title">Đăng kí lịch làm việc</h1>
            </div>
            <div className="row">
                <div className="col-12 mt-4">
                    <div id="calendar-container" className="card rounded border-0 shadow p-4">
                        <FullCalendar 
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth"
                            headerToolbar={{
                                start: 'today prev,next',
                                center: 'title',
                                end: 'dayGridMonth,timeGridWeek'
                            }}
                            allDaySlot={false}
                            {...viLocale} // Truyền đối tượng viLocale vào props
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TarotReaderSchedule;
