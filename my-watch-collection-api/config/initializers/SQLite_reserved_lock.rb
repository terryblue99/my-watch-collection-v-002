module SqliteTransactionFix
  def begin_db_transaction
    log('begin immediate transaction', nil) { @connection.transaction(:immediate) }
  end
end

module ActiveRecord
  module ConnectionAdapters
    class SQLiteAdapter < AbstractAdapter
      prepend SqliteTransactionFix
    end
  end
end