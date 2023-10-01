from django.contrib import admin

from .models import *


class PersonAdmin(admin.ModelAdmin):
    readonly_fields = ('free_rooms', 'type')
    list_filter = ["status"]


class PostAdmin(admin.ModelAdmin):
    list_display = ('number',)

    def formfield_for_manytomany(self, db_field, request, **kwargs):
        if db_field.name == "booked":
            pk = dict(request.__dict__).get("resolver_match").kwargs.get("object_id", 0)
            num = Room.objects.get(pk=pk)
            kwargs["queryset"] = BookingDate.objects.filter(number=num.number)
            for bd in BookingDate.objects.filter(number=num.number, status=True):
                num.booked.add(bd)
        return super(PostAdmin, self).formfield_for_manytomany(db_field, request, **kwargs)


admin.site.register(Feedback)
admin.site.register(BookingDate, PersonAdmin)
admin.site.register(Room, PostAdmin)
