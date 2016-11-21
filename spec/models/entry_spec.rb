require 'rails_helper'

RSpec.describe Entry, type: :model do
  fixtures :all

  describe "scopes" do
    describe "date" do
      subject { Entry.date(Date.yesterday) }
      it { is_expected.to include(entries(:yesterday)) }
      it { is_expected.not_to include(entries(:today)) }
    end

    describe "today" do
      subject { Entry.today }
      it { is_expected.to include(entries(:today)) }
      it { is_expected.not_to include(entries(:yesterday)) }
    end

    describe "month" do
      subject { Entry.month(1.month.ago.to_date) }
      it { is_expected.to include(entries(:last_month)) }
      it { is_expected.not_to include(entries(:today)) }
    end

    describe "this_month" do
      subject { Entry.this_month }
      it { is_expected.to include(entries(:today)) }
      it { is_expected.not_to include(entries(:last_month)) }
    end
  end

end
