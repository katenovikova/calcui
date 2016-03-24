def wb_price_val(wb_on, wb_h, wb_w):
    if wb_on == True:
        wb_h = wb_h + 15
        wb_w = wb_w + 15
        return wb_price(wb_h, wb_w)
    else:
        wb_w = wb_w - 0.5
        return wb_price(wb_h, wb_w)

def wb_price(wb_h, wb_w):
	get_data(lux)
